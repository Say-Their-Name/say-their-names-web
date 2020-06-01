import React from 'react'

export default function index(props) {
    const {image, fullname, age, children, location, context } = props
    return (
        <section>
            <div>
                <div>
                    <img src={image} alt="profile-picture"/>
                </div>
                <div>
                <div>
                    <h4>FULL NAME</h4>
                    <div>
                        <h2>{fullname}</h2>
                        <i>Icon</i>
                    </div>
                </div>
                <div>
                    <div>
                        <h4>Age</h4>
                        <text>{age}</text>
                    </div>
                    <div>
                        <h4>Children</h4>
                        <text>{children && children}</text>
                    </div>
                </div>
                <div>
                    <h4>LOCATION</h4>
                    <h2>{location}</h2>
                </div>
                <button>DONATE</button>
                <section>
                    <p>Share on:</p>
                    <h3>Twitter</h3>
                    <h3>Facebook</h3>
                    <h3>Whatsapp</h3>
                </section>
            </div>
            </div>
            <div>
                <h2>Context</h2>
                <p>{context}</p>
            </div>
        </section>
    )
}
