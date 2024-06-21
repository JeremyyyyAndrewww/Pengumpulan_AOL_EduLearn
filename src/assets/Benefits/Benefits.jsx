import './Benefits.css'

function Benefits() {
    return (
        <section id="benefits">
            <div className="benefitsHeading">
                <span>This App's</span>
                <h1>Benefits</h1>
            </div>

            <div className='boxContainer'>
                <div className='box'>
                    <h2>01</h2>
                    <h4>Expert Instruction</h4>
                    <p>Learn from industry experts who have hands-on experience in design and development.</p>
                </div>

                <div className='box'>
                    <h2>02</h2>
                    <h4>Diverse Course Offerings</h4>
                    <p>Explore a wide range of design and development courses covering various topics.</p>
                </div>

                <div className='box'>
                    <h2>03</h2>
                    <h4>Convenience and Accessibility</h4>
                    <p>Educational apps allow users to access learning materials anytime and anywhere, as long as they have an internet connection. This flexibility enables individuals to learn at their own pace and fit studying into their busy schedules.</p>
                </div>

                <div className='box'>
                    <h2>04</h2>
                    <h4>Interactive Learning Experience</h4>
                    <p>Many educational apps offer interactive features such as quizzes, games, and simulations, making the learning process more engaging and enjoyable. These interactive elements can enhance understanding, retention, and application of knowledge.</p>
                </div>

                <div className='box'>
                    <h2>05</h2>
                    <h4>Comprehensive Notes</h4>
                    <p>Access meticulously crafted notes that cover all key concepts and topics. Our notes are designed to help you grasp complex ideas quickly and efficiently.</p>
                </div>

                <div className='box'>
                    <h2>06</h2>
                    <h4>Community Forums</h4>
                    <p>Join our community forums to connect with peers, share insights, ask questions, and collaborate on projects. Our forums foster a supportive and interactive learning environment.</p>
                </div>
            </div>
        </section>
    );
}

export default Benefits;
