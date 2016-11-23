// import React
// import ReactRouter
import {config} from "./../config/config";
import FrameLeft from "./FrameLeft";
import EditCanvas from "./EditCanvas";
import "./../lib/glyph/Glyph";
import GlyphrStudioProject from "./../lib/glyphrStudioProject/GlyphrStudioProject";

export default React.createClass({
	getInitialState() {

		var _UI = {
			thisGlyphrStudioVersion: '2.0.0',
			thisGlyphrStudioVersionName: 'Version 2 Alpha',

			selected: {
				tray: 'attributes',
				glyph: '0x0041',
				path: 1,
			}, 

			loadSVGPathData: 'M230.52657,409.06539 c110.61838, 0 200.47348, -89.79021 200.47348, -200.46619 c0, -110.67598 -88.90823, -199.53379 -200.47348, -199.53379 c-111.56524, 0 -199.52662, 89.79021 -199.52662, 199.53379 c0, 109.74358 88.90823, 200.46619 199.52662, 200.46619Z M93.99727, 180.06103 c19.03574, -87.26731 93.25469, -145.43244 165.29491, -129.71821 c72.04022, 15.71423 115.11762, 98.37175 95.85417, 186.68301 c-19.26345, 88.31126 -92.67346, 146.65284 -165.11815, 130.85039 c-72.44469, -15.80246 -115.06666, -100.54787 -96.03093, -187.81518Z M381.71807, 161.23326 c-21.833, 27.717 -21.605, 68.67 0.452, 96.651 c46.587, 59.098 119.081, 151.061 119.081, 151.061l62.38685, -31.03592l-132.12456, -168.61066 l132.55714, -169.32011l-62.38643, -31.0353 c0, 0 -73.273, 93.016 -119.966, 152.29Z'			
		};

		window.GlyphrStudio = {};
		window.GlyphrStudio._GP = new GlyphrStudioProject(_UI.thisGlyphrStudioVersion, _UI.thisGlyphrStudioVersionName);
		window.GlyphrStudio._GP.glyphrStudioVersion = _UI.thisGlyphrStudioVersion;
		window.GlyphrStudio._GP.glyphrStudioVersionName = _UI.thisGlyphrStudioVersionName;
		window.GlyphrStudio._GP.glyphs[this.state.selected.glyph] = new Glyph(_UI.loadSVGPathData);
		
		return({
			_UI: _UI,
			_GP: window.GlyphrStudio._GP
		})
	},

	componentWillMount() {
		paper.setup();
		// paper.install(window);
	}, 

	componentDidMount(){
		// this.props._GP = new GlyphrStudioProject(_UI.thisGlyphrStudioVersion, _UI.thisGlyphrStudioVersionName);
		// this.props._GP.glyphs[this.state.selected.glyph] = new Glyph(_UI.loadSVGPathData);
	}, 

	render() {
		return (
			<div className="appwrapper">
				<FrameLeft data={this.state}>
					this.props.children
				</FrameLeft>
				<EditCanvas data={this.state}>
					this.props.children
				</EditCanvas>
			</div>
		)
	}
})