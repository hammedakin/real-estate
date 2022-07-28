import React from 'react';
import { useHistory } from 'react-router-dom';


const Back = (clas) => {
    let history = useHistory()
    function goBack() {
        history.goBack();
    }
    return (
        <>
            <div class="my-5">
                <button class={`d-flex align-items-center border-0 btn py-2 px-3 btn1`}onClick={e => goBack()}>
                    <box-icon
                        class="box-icon"
                        size="24px"
                        color=" #fff"
                        name="chevron-left"
                        type="solid"
                    ></box-icon>
                    BACK </button>

            </div>

        </>
    );
}

export default Back;