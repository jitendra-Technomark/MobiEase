/// <reference types="react"/>
import { ApexOptions } from 'apexcharts'
import React from 'react'

declare module 'react-apexcharts' {
  export interface Props {
    type?:
      | 'line'
      | 'area'
      | 'bar'
      | 'pie'
      | 'donut'
      | 'radialBar'
      | 'scatter'
      | 'bubble'
      | 'heatmap'
      | 'candlestick'
      | 'boxPlot'
      | 'radar'
      | 'polarArea'
      | 'rangeBar'
      | 'rangeArea'
      | 'treemap'
    series?: ApexOptions['series']
    width?: string | number
    height?: string | number
    options?: ApexOptions | any
    [key: string]: any
  }
  export default class ReactApexChart extends React.Component<Props> {}
}
