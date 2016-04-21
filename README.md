# Qlik Sense Trellis Chart Extension
<hr>
<br> v1.0. - Tested with Qlik Sense 2.2.3.
<br>
<h3>Dimensions and Measures </h3>

Required at least two dimensions and one measure.
-	First Dimension : Dimension of the chart element
-	Second Dimension : Trellis dimension, on which the chart will be repeated
-	Measure 1 : any expression or measures master items

<h3>Examples of the many possibilities</h3>
<img src="https://github.com/miclae76/trellis-chart/blob/master/Trellis.jpg" alt="Trellis Chart Sample" height="480" width="973">


<h3>Trellis Configuration</h3>
<b>Trellis Settings</b>

-	Number of Columns and Rows in the trellis grid.
-	Chart Type : 	Bar Chart, Line Chart, Area Chart, Lollipop Chart, Pie Chart, Step Chart
-	Inner Radius (%) : For Pie Chartonly, size of the inner circle for a ring chart (Full pie chart has inner radius % = 0 )
-	Chart Orientation : For All charts, excepted Pie Chart, switch x/y axis
-	Show Grid : Display grid lines in background of the chart

<b>Label and Axis</b>
-	Hide Dim-Axis Labels : disable labels on the axis
-	Hide Measure Labels : disable labels on the measure axis
-	Value Labels : display labels on value points (if bar too thin, labels will be automatically hidden)
-	Trellis Label Size : in pixel, size of the label for the trellis dimension
-	Trellis – Labels Positions : at Top or inside the chart 

<b>Color Settings</b>
-	Colors : Single color, color by dimension (base on QLikColor12 palette) [Color by Measure : coming soon]
-	Select Color : Color picker if single color mode is selected.


<h3>Roadmap</h3>
- Enable Selections in chart elements
- Custom tooltip
- Handle a seconf measure, included stacked mode.

Enjoy and stay tuned !
