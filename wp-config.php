<?php
define( 'WP_CACHE', true ); // By SiteGround Optimizer

/**
 * The base configuration for WordPress
 *
 * The wp-config.php creation script uses this file during the installation.
 * You don't have to use the web site, you can copy this file to "wp-config.php"
 * and fill in the values.
 *
 * This file contains the following configurations:
 *
 * * Database settings
 * * Secret keys
 * * Database table prefix
 * * Localized language
 * * ABSPATH
 *
 * @link https://wordpress.org/support/article/editing-wp-config-php/
 *
 * @package WordPress
 */

// ** Database settings - You can get this info from your web host ** //
/** The name of the database for WordPress */
define( 'DB_NAME', 'dbk055qi8cgqxb' );

/** Database username */
// define( 'DB_USER', 'ufmkcb6d8ahig' );
define( 'DB_USER', 'root' );

/** Database password */
// define( 'DB_PASSWORD', 'jkiwzziwflqx' );
define( 'DB_PASSWORD', '' );

/** Database hostname */
// define( 'DB_HOST', '127.0.0.1' );
define( 'DB_HOST', 'localhost' );

/** Database charset to use in creating database tables. */
define( 'DB_CHARSET', 'utf8' );

/** The database collate type. Don't change this if in doubt. */
define( 'DB_COLLATE', '' );

/**#@+
 * Authentication unique keys and salts.
 *
 * Change these to different unique phrases! You can generate these using
 * the {@link https://api.wordpress.org/secret-key/1.1/salt/ WordPress.org secret-key service}.
 *
 * You can change these at any point in time to invalidate all existing cookies.
 * This will force all users to have to log in again.
 *
 * @since 2.6.0
 */
define( 'AUTH_KEY',          'no<+u1u4ZP{NTbT|okv N4@nE<>Id#0``doA@HQvspCvKOgDR=^+YDdZ4c1tR4;/' );
define( 'SECURE_AUTH_KEY',   'nDmRno?-Mf&tPT+X&V#KSl=6I8$@4UQ-{76vVHg7OPSjtWpwvfWy8kYPND6iXq5$' );
define( 'LOGGED_IN_KEY',     'op-_Fg0~F+~c~8oPEKoNge^iD9A/+Q>FSs{%%Dp^T(Ex(6=woc1so7NGJwkKm-2E' );
define( 'NONCE_KEY',         'UR`ZPC5{qTYRn8g#g&M%x*U(AIc0/LPl=%2ftW?aGHcwNuJ>g |;xITPW|fUab]q' );
define( 'AUTH_SALT',         'G _xpF5#To[/f}p~By!29Jh%RXio{Mbu@z?z0(]P;%&=^c`WgN}mh-I2ryvBz[@A' );
define( 'SECURE_AUTH_SALT',  'wWjS9=[`a%gYh>,<Wh^h^WIVD1@ajbllio19a7H?`l7$KA/D@+K@6i.d5T,<V=1s' );
define( 'LOGGED_IN_SALT',    '#o_&@51y4G>]FHp|;iUfJ}yrk#~zHZ3$J-?M??).6&b2ZI%Eoy9-}ZjRW*bEET[J' );
define( 'NONCE_SALT',        'fCI(&sILB.5D>z1u.+IEW^qf7<<Y`_huq`Jz4Z?Yehy]np54.cOz$/apr@WA|~g%' );
define( 'WP_CACHE_KEY_SALT', 'U4tcgmk$i1A=r<8pzqQExkt,VJ1U}%|3V}}jn$:!RPI}{>.K);z&i[NvB4S{+NP+' );


/**#@-*/

/**
 * WordPress database table prefix.
 *
 * You can have multiple installations in one database if you give each
 * a unique prefix. Only numbers, letters, and underscores please!
 */
$table_prefix = 'uqm_';


/* Add any custom values between this line and the "stop editing" line. */



/**
 * For developers: WordPress debugging mode.
 *
 * Change this to true to enable the display of notices during development.
 * It is strongly recommended that plugin and theme developers use WP_DEBUG
 * in their development environments.
 *
 * For information on other constants that can be used for debugging,
 * visit the documentation.
 *
 * @link https://wordpress.org/support/article/debugging-in-wordpress/
 */
if ( ! defined( 'WP_DEBUG' ) ) {
	define( 'WP_DEBUG', false );
}

/* That's all, stop editing! Happy publishing. */

/** Absolute path to the WordPress directory. */
if ( ! defined( 'ABSPATH' ) ) {
	define( 'ABSPATH', __DIR__ . '/' );
}

/** Sets up WordPress vars and included files. */
@include_once('/var/lib/sec/wp-settings-pre.php'); // Added by SiteGround WordPress management system
require_once ABSPATH . 'wp-settings.php';
@include_once('/var/lib/sec/wp-settings.php'); // Added by SiteGround WordPress management system
