import "./../style/default/Panel";
import EventUnit from "./../lib/core/canvasEventStream/CanvasEventUnit";
let ptaee = new EventUnit("panelTrayAttributes", 1);

export default React.createClass({
  componentDidMount() {
    let _this = this;
    ptaee.on("editCanvas.mousemove", function(event) {
      if(_this.refs.text) _this.refs.text.value = "x/y = "+ event.point.x + "/" + event.point.y;
    });
  },
  render() {
    return (
      <div>
        <h1>ATTRIBUTES</h1>
        <textarea
          ref="text"
          style = {{width: '90%', height: '500px'}}
        ></textarea>
      </div>
    )
  }
})