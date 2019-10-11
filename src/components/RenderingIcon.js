import React from 'react';
import {BarLoader, HashLoader,FadeLoader
    ,ClimbingBoxLoader} from 'react-spinners'
import { css } from '@emotion/core';

const override = css`
    display: block;
    top: 40%;
    width: 100px;
    margin: 0 auto;
    border-color: red;
    transition: all ease-in-out .3s;
`;

const RenderingIcon = () => {

    return (<React.Fragment>

        <BarLoader
         css={override}
          sizeUnit={"px"}
          size={15}
          color={'black'}
          loading={true}
        />
            

    </React.Fragment>)

}
export default RenderingIcon;