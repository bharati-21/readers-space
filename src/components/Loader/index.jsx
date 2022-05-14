import React from 'react';
import loaderImg from 'images/loader.svg';

const Loader = () => {
    return (
        <section className="loader h-full w-full flex flex-col item-center justify-center">
            <img src={loaderImg} className="h-[200px] w-[200px] mx-auto" alt="Animated loader" />
        </section>
    )
}

export { Loader };