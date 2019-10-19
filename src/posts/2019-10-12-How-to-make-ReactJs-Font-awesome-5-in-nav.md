---
category : Coding
tags : [ ReactJs, Javascript, FontAwesome]
comments: true
---

How to make ReactJs Font Awesome 5 in nav

```js
import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faLeaf } from '@fortawesome/free-solid-svg-icons'
import {Link} from "react-router-dom";

export default class Nav extends React.Component {
    render() {
        return (
            <nav className="nav">

                <ul>
                    <li>
                        <FontAwesomeIcon icon={faLeaf} color='grey'/>
                    </li>
                    <li>
                        <Link to="/about">Who</Link>
                    </li>
                    <li>
                        <Link to="/small-thought">Small thought</Link>
                    </li>
                    <li>
                        <Link to="/long-thought">Long thought</Link>
                    </li>

                </ul>
            </nav>
        )
    }
}

```

That should be use this way.
`<FontAwesomeIcon icon={faLeaf} color='grey'/>`

some wrong infomation on web, they say '<i>' icon would be used.
However, That's wrong.
You just need find your icon name from `@fortawesome/free-solid-svg-icons` list.

then write into `<FontAwesomeIcon icon={}>` here.

after that, you can add some options

through this 

```js
  icon: IconProp
  mask?: IconProp
  className?: string
  color?: string
  spin?: boolean
  pulse?: boolean
  border?: boolean
  fixedWidth?: boolean
  inverse?: boolean
  listItem?: boolean
  flip?: FlipProp
  size?: SizeProp
  pull?: PullProp
  rotation?: RotateProp
  transform?: string | Transform
  symbol?: FaSymbol
  style?: CSSProperties
  tabIndex?: number;
  title?: string;
```


icon={}
spin={true}
...so on!