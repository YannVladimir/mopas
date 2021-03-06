import React from 'react';

	/**
	 * The ButtonH5 class provides wraps a selection in `h5` element.
	 *
	 * @uses ButtonActionStyle
	 * @uses ButtonStateClasses
	 * @uses ButtonStyle
	 *
	 * @class ButtonH5
	 */
	var ButtonH5 = React.createClass({
		mixins: [AlloyEditor.ButtonStyle, AlloyEditor.ButtonStateClasses, AlloyEditor.ButtonActionStyle],

		// Allows validating props being passed to the component.
		propTypes: {
			/**
			 * The editor instance where the component is being used.
			 *
			 * @property {Object} editor
			 */
			editor: React.PropTypes.object.isRequired,

			/**
			 * The label that should be used for accessibility purposes.
			 *
			 * @property {String} label
			 */
			label: React.PropTypes.string,

			/**
			 * The tabIndex of the button in its toolbar current state. A value other than -1
			 * means that the button has focus and is the active element.
			 *
			 * @property {Number} tabIndex
			 */
			tabIndex: React.PropTypes.number
		},

		// Lifecycle. Provides static properties to the widget.
		statics: {
			/**
			 * The name which will be used as an alias of the button in the configuration.
			 *
			 * @static
			 * @property {String} key
			 * @default h5
			 */
			key: 'h5'
		},

		/**
		 * Lifecycle. Returns the default values of the properties used in the widget.
		 *
		 * @method getDefaultProps
		 * @return {Object} The default properties.
		 */
		getDefaultProps: function() {
			return {
				style: {
					element: 'h5'
				}
			};
		},

		/**
		 * Lifecycle. Renders the UI of the button.
		 *
		 * @method render
		 * @return {Object} The content which should be rendered.
		 */
		render: function() {
			var cssClass = 'ae-button ' + this.getStateClasses();

			return (
				<button aria-label={AlloyEditor.Strings.h5} aria-pressed={cssClass.indexOf('pressed') !== -1} className={cssClass} data-type="button-h5" onClick={this.applyStyle} tabIndex={this.props.tabIndex} title={AlloyEditor.Strings.h5}>
					<span className="ae-icon-h5"></span>
				</button>
			);
		}
	});

	AlloyEditor.Buttons[ButtonH5.key] = AlloyEditor.ButtonH5 = ButtonH5;