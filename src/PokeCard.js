import React from 'react';

class PokeCard extends React.Component {
    constructor() {
        super()
        this.state = {
            imgUrl: '',
            thisPokemonId: 0
        }
    }
    componentDidMount() {
        fetch(this.props.url).then(response => response.json())
        .then( (info) => {
            this.setState({
                thisPokemonId: info.id,
                imgUrl: info.sprites.front_default })
        })

        // this.setState({imgUrl: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/'+ this.state.thisPokemonId.toString() + '.png' })
    }

    render () {
        const { imgUrl, thisPokemonId } = this.state
        return (
            <div className='tc bg-lightest-blue dib br3 pa3 ma2 grow bw2 shadow-5'>
                <img src={imgUrl} alt="pokemon"/>
                <div>
                    <h1>{this.props.name.charAt(0).toUpperCase() + this.props.name.slice(1)}</h1>
                    <p>National Dex # {thisPokemonId}</p>
                </div>
            </div>
            )
    }
}

export default PokeCard;