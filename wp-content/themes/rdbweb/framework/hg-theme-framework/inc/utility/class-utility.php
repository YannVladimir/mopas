<?php if ( !defined( 'ABSPATH' ) ) {
	return;
}

class ZnHgTFwUtility{

	/**
	 * Holds a refference to the theme options pages
	 * @return array the theme options pages
	 */
	var $theme_pages = array();

	/**
	 * Holds a refference to the theme options
	 * @return array the theme options
	 */
	var $theme_options = array();


	/**
	 * Returns the theme options pages
	 * @return array the theme options pages
	 */
	function get_theme_options_pages()
	{

		// Check if the pages are cached
		if( ! empty( $this->theme_pages ) ){
			return $this->theme_pages;
		}


		// TODO: remove the following code and add it from Kallyas
		$admin_pages = array();
		if ( file_exists( ZNHGTFW()->getThemePath( '/template_helpers/options/theme-pages.php' ) ) )
		{
			include( ZNHGTFW()->getThemePath( '/template_helpers/options/theme-pages.php' ) );
		}

		// Cache the values
		$this->theme_pages = apply_filters( 'zn_theme_pages', $admin_pages );

		return $this->theme_pages;
	}


	/**
	 * Returns the theme options
	 * @return array the theme options
	 */
	function get_theme_options()
	{

		// Check if the options are cached
		if( ! empty( $this->theme_options ) ){
			return $this->theme_options;
		}

		// TODO: remove the following code and add it from Kallyas
		$admin_options = array();
		if ( file_exists( ZNHGTFW()->getThemePath( '/template_helpers/options/theme-options.php' ) ) )
		{
			include( ZNHGTFW()->getThemePath( '/template_helpers/options/theme-options.php' ) );
		}
		$this->theme_options =  apply_filters( 'zn_theme_options', $admin_options );

		return $this->theme_options;
	}

}
return new ZnHgTFwUtility();
