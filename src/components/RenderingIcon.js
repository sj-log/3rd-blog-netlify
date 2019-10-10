import React from 'react';
import {ClimbingBoxLoader} from 'react-spinners'
import { css } from '@emotion/core';

const override = css`
    display: block;
    height:75%;
    width:100%;
    margin: 0 auto;
    border-color: red;
    transition: all ease-in-out .3s;
`;

const RenderingIcon = () => {

    return (<React.Fragment>

        <ClimbingBoxLoader
         css={override}
          sizeUnit={"px"}
          size={15}
          color={'black'}
          loading={true}
        />
            

    </React.Fragment>)

}
export default RenderingIcon;