import React from 'react';
import coockiePolicy from '../../assets/images/cookiePolicy.jpg'

const CookiePolicy = () => {
    return (
        <section>
            <div class="mx-auto max-w-screen-xl px-4 py-16 sm:px-6 lg:px-8">
                <div class="grid grid-cols-1 gap-8 lg:grid-cols-2 lg:gap-16">
                    <div
                        class="relative h-64 overflow-hidden rounded-lg sm:h-80 lg:order-last lg:h-full"
                    >
                        <img
                            alt="Party"
                            src={coockiePolicy}
                            class="absolute inset-0 h-full w-full object-cover"
                        />
                    </div>

                    <div class="lg:py-24">
                        <h2 class="text-3xl font-bold sm:text-4xl"><span className='text-error'>Cookie</span> Policy</h2>

                        <p class="mt-4 text-gray-600 text-justify">
                            A cookie policy is a legal document created to inform site visitors that you’re using cookies — and how — on your website, web app, or mobile app.

                            <br />
                            <br />

                            Maintaining proper cookie compliance requires your cookie policy to include the type of cookies collected, the methods used to obtain the information, the reasons why cookies are being collected, and an explanation of how users can manage their cookie preferences..
                        </p>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default CookiePolicy;