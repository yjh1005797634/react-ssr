/**
 * Created by apple on 18/10/16.
 */

module.exports = {
    module:{
        rules:[
            {
                test:/\.js?$/,
                loader:'babel-loader',
                exclude:/node_modules/,
                options:{
                    presets:['react','stage-0',
                        ['env',{
                            targets:{
                                browsers:['last 2 version']
                            }
                        }]
                    ]
                }
            }

        ]
    }
}