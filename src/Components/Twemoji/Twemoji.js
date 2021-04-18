import React, { memo } from 'react'
import twemoji from 'twemoji'
import './Twemoji.css'

/**
 * @name Twemoji
 * @description Simple component to insert an emoji from twitter's Twemoji
 * Source: https://gist.github.com/chibicode/fe195d792270910226c928b69a468206
 * @author github.com/chibicode
 * @package https://gist.github.com/chibicode/fe195d792270910226c928b69a468206
 */
const Twemoji = ({ emoji }) => (
    <span
        dangerouslySetInnerHTML={{
            __html: twemoji.parse(emoji, {
                folder: 'svg',
                ext: '.svg'
            })
        }}
    />
)

export default memo(Twemoji);
