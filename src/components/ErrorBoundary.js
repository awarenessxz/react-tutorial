import React, { Component } from "react";

const Hero = ({heroName}) => {
    if (heroName === "Joker") {
        throw new Error("Not a hero");
    }  
    return (
        <div>
            {heroName}
        </div>
    );
}

class HeroDemo extends Component {
    render() {
        return (
            <div>
                <ErrorBoundary>
                    <Hero heroName="Batman" />
                    <Hero heroName="Superman" />
                    <Hero heroName="Joker" />
                </ErrorBoundary>
            </div>
        );
    }
}

class ErrorBoundary extends Component {
    constructor(props) {
        super(props);
        this.state = {
            hasError: false
        }
    }

    static getDerivedStateFromError(error) {
        return {
            hashError: true
        }
    }

    // usually used to log the error
    componentDidCatch(error, info) {
        // these errors will be automatically log to the console
        console.log(error);
        console.log(info);
    }
    
    render() {
        if (this.state.hashError) {
            return <h1>Something went wrong</h1>
        } else {
            return this.props.children;
        }
    }
}

export default HeroDemo;