import React from 'react';
import privacyPolicyImage from '../../assets/images/privacyPolicy.jpg'

const PrivacyPolicy = () => {
    return (
        <div>
            <section>
                <div class="mx-auto max-w-screen-xl px-4 py-16 sm:px-6 lg:px-8">
                    <div class="grid grid-cols-1 gap-8 lg:grid-cols-2 lg:gap-16">
                        <div
                            class="relative h-64 overflow-hidden rounded-lg sm:h-80 lg:order-last lg:h-full"
                        >
                            <img
                                alt="Party"
                                src={privacyPolicyImage}
                                class="absolute inset-0 h-full w-full object-cover"
                            />
                        </div>

                        <div class="lg:py-24">
                            <h2 class="text-3xl font-bold sm:text-4xl"><span className='text-error'>Privacy</span> Policy</h2>

                            <p class="mt-4 text-gray-600">
                                Lorem ipsum dolor, sit amet consectetur adipisicing elit. Aut qui hic
                                atque tenetur quis eius quos ea neque sunt, accusantium soluta minus
                                veniam tempora deserunt? Molestiae eius quidem quam repellat.
                            </p>
                        </div>
                    </div>
                </div>
            </section>

        </div>
    );
};

export default PrivacyPolicy;