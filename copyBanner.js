const fs = require('fs');
const path = require('path');

module.exports = function (context) {
    const platformRoot = path.join(context.opts.projectRoot, 'platforms/android');
    const bannerSource = path.join(__dirname, 'banner.png');
    const bannerDestination = path.join(platformRoot, 'app/src/main/res/drawable/banner.png');

    const bannerDir = path.dirname(bannerDestination);
    if (!fs.existsSync(bannerDir)) {
        fs.mkdirSync(bannerDir, { recursive: true });
    }

    fs.copyFileSync(bannerSource, bannerDestination);
    console.log('Banner copiado para:', bannerDestination);
};
