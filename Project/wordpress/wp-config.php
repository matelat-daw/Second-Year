<?php
/**
 * The base configuration for WordPress
 *
 * The wp-config.php creation script uses this file during the installation.
 * You don't have to use the website, you can copy this file to "wp-config.php"
 * and fill in the values.
 *
 * This file contains the following configurations:
 *
 * * Database settings
 * * Secret keys
 * * Database table prefix
 * * ABSPATH
 *
 * @link https://developer.wordpress.org/advanced-administration/wordpress/wp-config/
 *
 * @package WordPress
 */

// ** Database settings - You can get this info from your web host ** //
/** The name of the database for WordPress */
define( 'DB_NAME', 'wordpress' );

/** Database username */
define( 'DB_USER', 'root' );

/** Database password */
define( 'DB_PASSWORD', 'Anubis@68' );

/** Database hostname */
define( 'DB_HOST', 'localhost' );

/** Database charset to use in creating database tables. */
define( 'DB_CHARSET', 'utf8mb4' );

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
define( 'AUTH_KEY',         ' H{cwk:] {Q01^Q4~BA9;<(oXJ%~!pWCVnkvVXNLXIa:betto7|*$8y! YCak%HR' );
define( 'SECURE_AUTH_KEY',  'B?t_G0T(z;8|L2)/8p6jRHj0:!<r;MiCcg6bg3FJ9;k~VAuFOBZ``H79*G%S96O-' );
define( 'LOGGED_IN_KEY',    '&*J5#6]HYS|!n>1j^_h{X>C&fRif3{<I{Kyb/w3M<}d.U;bDicd`zvH:D9T#TrQ5' );
define( 'NONCE_KEY',        ':c{?Lz3:%Ru4b.z~8TLQGVt Jr67&1nz6B(T+_(^*<0i`Zv?hAR~,}D%Fx:)UuNJ' );
define( 'AUTH_SALT',        'uI$q0#i-d*v7XLN>`<Xd1yF)Eoy9|_+8<-cUiN?_OxR1W5a(n>Y=&Z_Lv(#dWh]+' );
define( 'SECURE_AUTH_SALT', 'z-qG~=YZtR9d(+MlU?[EDc7?]LC^_^%0f6A,lSH_Arf1o][g@mphkF67bE:)zu.?' );
define( 'LOGGED_IN_SALT',   'xdoy]Ge;B[]L0B6#eAD7:5,c%,`=pt8JZ2q/?(da{W:|J0tc$;sI)D7+{23!>NO[' );
define( 'NONCE_SALT',       '-MsHii|6^~gXqaWF c0K&qhVH:pnMc7A:kT+:~eN[O38hN1Y+~xYfiv k0U9C_Ry' );

/**#@-*/

/**
 * WordPress database table prefix.
 *
 * You can have multiple installations in one database if you give each
 * a unique prefix. Only numbers, letters, and underscores please!
 */
$table_prefix = 'wp_';

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
 * @link https://developer.wordpress.org/advanced-administration/debug/debug-wordpress/
 */
define( 'WP_DEBUG', false );

/* Add any custom values between this line and the "stop editing" line. */



/* That's all, stop editing! Happy publishing. */

/** Absolute path to the WordPress directory. */
if ( ! defined( 'ABSPATH' ) ) {
	define( 'ABSPATH', __DIR__ . '/' );
}

/** Sets up WordPress vars and included files. */
require_once ABSPATH . 'wp-settings.php';
