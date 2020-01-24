import React, { useState, useEffect } from 'react'
import api from '../api/api'

const generateChart = async (account, activities) => {
  const d3 = window.d3
  var width = 960,
    height = 136,
    cellSize = 17 // cell size

  var percent = d3.format('.1%'),
    format = d3.timeFormat('%Y-%m-%d')

  var color = d3
    .scaleQuantize()
    .domain([-0.05, 0.05])
    .range(
      d3.range(11).map(function(d) {
        return 'q' + d + '-11'
      })
    )

  const startYear = new Date(
    account.availability.activities.available_from
  ).getFullYear()
  const endYear = new Date(
    account.availability.activities.available_to
  ).getFullYear()

  var svg = d3
    .select('.chart-content')
    .selectAll('svg')
    .data(d3.range(2005, 2011))
    .enter()
    .append('svg')
    .attr('width', width)
    .attr('height', height)
    .attr('class', 'RdYlGn')
    .append('g')
    .attr(
      'transform',
      'translate(' +
        (width - cellSize * 53) / 2 +
        ',' +
        (height - cellSize * 7 - 1) +
        ')'
    )

  svg
    .append('text')
    .attr('transform', 'translate(-6,' + cellSize * 3.5 + ')rotate(-90)')
    .style('text-anchor', 'middle')
    .text(function(d) {
      return d
    })

  var rect = svg
    .selectAll('.day')
    .data(function(d) {
      return d3.timeDays(new Date(d, 0, 1), new Date(d + 1, 0, 1))
    })
    .enter()
    .append('rect')
    .attr('class', 'day')
    .attr('width', cellSize)
    .attr('height', cellSize)
    .attr('x', function(d) {
      return d3.timeWeek.count(d3.timeYear(d), d) * cellSize
    })
    .attr('y', function(d) {
      return d.getDay() * cellSize
    })
    .datum(format)

  rect.append('title').text(function(d) {
    return d
  })

  svg
    .selectAll('.month')
    .data(function(d) {
      return d3.timeMonths(new Date(d, 0, 1), new Date(d + 1, 0, 1))
    })
    .enter()
    .append('path')
    .attr('class', 'month')
    .attr('d', monthPath)

  d3.csv(
    'https://gist.githubusercontent.com/GuilloOme/75f51c64c2132899d58d4cd6a23506d3/raw/92882e79720605aae653398a9e8b5862e91a96f8/dji.csv',
    function(error, csv) {
      if (error) throw error

      var data = d3
        .nest()
        .key(function(d) {
          return d.Date
        })
        .rollup(function(d) {
          return (d[0].Close - d[0].Open) / d[0].Open
        })
        .map(csv)

      rect
        .filter(function(d) {
          return data.has(d)
        })
        .attr('class', function(d) {
          return 'day ' + color(data.get(d))
        })
        .select('title')
        .text(function(d) {
          return d + ': ' + percent(data.get(d))
        })
    }
  )

  function monthPath(t0) {
    var t1 = new Date(t0.getFullYear(), t0.getMonth() + 1, 0),
      d0 = t0.getDay(),
      w0 = d3.timeWeek.count(d3.timeYear(t0), t0),
      d1 = t1.getDay(),
      w1 = d3.timeWeek.count(d3.timeYear(t1), t1)
    return (
      'M' +
      (w0 + 1) * cellSize +
      ',' +
      d0 * cellSize +
      'H' +
      w0 * cellSize +
      'V' +
      7 * cellSize +
      'H' +
      w1 * cellSize +
      'V' +
      (d1 + 1) * cellSize +
      'H' +
      (w1 + 1) * cellSize +
      'V' +
      0 +
      'H' +
      (w0 + 1) * cellSize +
      'Z'
    )
  }
}

export const Charts = ({ userId }) => {
  const [account, setAccount] = useState([])

  useEffect(() => {
    const getAccounts = async () => {
      const account = (await api.getAccounts(userId))[0]
      const activities = await api.getActivities(account.id)
      await generateChart(account, activities)
      setAccount(account)
    }
    getAccounts()
  }, [])

  return (
    <div>
      <h2>Driving activity data for {account.data_partner}</h2>
      <div className="chart-content" />
    </div>
  )
}
