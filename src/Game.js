import React from 'react'

class Game extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            gameOn: '',
            squareSize: 0,
            arrayOfSquares: [],
            special: '',
            numberOfSquares: 0
        }
    }

    componentDidMount = () => {
        let special = Math.ceil(Math.random() * 4)
        // special is 2
        // special number between 1 -> squareSize*squareSize
        this.setState({ gameOn: true, squareSize: 2, arrayOfSquares: [1, 2, 3, 4], special: special, numberOfSquares: 4 })
    }

    handleClick = (event) => {
        event.preventDefault()
        let value = parseInt(event.target.value)
        if (value === this.state.special) {

            this.setState({ gameOn: true })
            let squareSize = this.state.squareSize + 1
            this.setState({ squareSize: squareSize })

            let numberOfSquares = squareSize ** 2
            this.setState({ numberOfSquares: numberOfSquares })

            let arrayOfSquares = []

            for (let i = 1; i <= numberOfSquares; i++) {
                arrayOfSquares.push(i)
            }
            this.setState({ arrayOfSquares: arrayOfSquares })

            let special = Math.ceil(Math.random() * numberOfSquares)
            this.setState({ special: special })

        }
        else if (value !== this.state.special) {
            console.log(value, this.state.special)
            console.log(typeof value, typeof this.state.special)
            this.setState({ gameOn: false })
        }
    }

    render() {
        return (
            <div>
                {
                    this.state.gameOn === true &&
                    <p>GAME ON</p>
                }
                {
                    this.state.gameOn === true ?
                        this.state.arrayOfSquares.map((square) => {
                            return (
                                <form onSubmit={this.handleClick}>
                                    <button disabled={this.state.gameOn === false} value={square} onClick={event => this.handleClick(event)}>{square === this.state.special ? 'Right' : 'Wrong'}</button>
                                </form>
                            )
                        })
                        :
                        <p>GAME OVER</p>
                }
            </div>
        )
    }
}

export default Game