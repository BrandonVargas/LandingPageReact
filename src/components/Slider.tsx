import React from 'react'
import '../css/Slider.css'

interface SliderProps {
    slides: Array<{
        image: string;
        title: string;
        highlight: string;
        description: string;
        urlText: string;
        url: string;}>
}

const Slider: React.FC<SliderProps> = ( {slides} ) => {
    const [curr, setCurr] = React.useState(0);
    const { length } = slides;

    const goToNext = () => {
    setCurr(curr === length - 1 ? 0 : curr + 1);
    }

    React.useEffect(() => {
    setTimeout(goToNext, 3000)
    })

    if (!Array.isArray(slides) || length <= 0) {
        return null;
    }

    return (
        <div className="slider">
            {slides.map((s, i) => (
            <div className={i === curr ? "slide active" : "slide"} key={s.title}>
                <div className="content">
                    <p className="title">{s.title}</p>
                    <p className="highlight">{s.highlight}</p>
                    <p className="description">{s.description}</p>
                    <p><a className="url" href="/">{s.urlText}</a></p>
                </div>
                {i === curr && (
                    <img className="image" src={require(`../assets/${s.image}`)} alt="Hero" />
                )}
            </div>
            ))}
        </div>
    );
}

export default Slider