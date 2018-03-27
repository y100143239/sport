const ENV_VARS = require( "../../public/config/env.vars" );

Page( {
    data: {
        statistics: {
            today: 13145,
            numOfDays: 32,
            week: 28958,
            month: 129695
        },
        image: {
            skin: `${ENV_VARS.webImagesDir}/_local/skin_night.jpg`,
            share: `${ENV_VARS.webImagesDir}/share/icon_share.png`,
            exchange: `${ENV_VARS.webImagesDir}/share/icon_exchange.png`,
            download: `${ENV_VARS.webImagesDir}/share/icon_download.png`
        }
    }
} );