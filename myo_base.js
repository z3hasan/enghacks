
		var myo = Myo.create();

		var createGraph = function(elementId, startingData, range, resolution){
			var history = _.times(resolution, function(){
				return startingData;
			});
			var graph = {
				history : history,
				getGraphData : function(){
					var result = {};
					_.each(this.history, function(data, index){
						_.each(data, function(val, axis){
							result[axis] = result[axis] || {label : axis, data : []};
							result[axis].data.push([val, index])
						});
					});
					return _.values(result);
				},
				addData : function(data){
					this.history.push(data);
					this.history = this.history.slice(1);
					this.update();
				},
				update : function(){
					this.plot.setData(this.getGraphData());
					this.plot.draw();
				},
			};
			graph.plot = $.plot("#" + elementId, graph.getGraphData(), {
				series: {shadowSize: 0},
				colors: [ '#84FFF1', '#FFF38A', '#FF4B23', '#00797F'],
				xaxis: {
					min : -range,
					max : range
				},
				yaxis : {
					show: false,
					min : 0,
					max : resolution
				},
				legend : {
					backgroundOpacity : 0,
				},
				grid : {
					borderColor : "#427F78"
				}
			});
			return graph;
		}

		var orientationGraph = createGraph('orientation', {x:0,y:0,z:0,w:0}, 1, 100);

		myo.on('imu', function(data){
			orientationGraph.addData(data.orientation);
		})
