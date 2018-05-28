//set dimensions
          var w = 700;
          var h = 400;
          //define projection
          var projection = d3.geo.mercator()
                          .center([-100, 22])
                          .translate([ w/1.7, h/1.7])
                          .scale([ w/.7 ]);
          //define path generator
          var path = d3.geo.path()
                    .projection(projection)
          //svg
          var svg = d3.select("#container")
                    .append("svg")
                    .attr("width", w)
                    .attr("height", h);
          //load GeoJson data
          d3.json("mexico.json", function(json) {
            // bind data
            svg.selectAll("path")
               .data(json.features)
               .enter()
               .append("path")
               .attr("d", path);
          });