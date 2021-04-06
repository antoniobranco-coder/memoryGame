import { useEffect, useState } from "react"

const Game = () => {

    const [gameOn, setGameOn] = useState('')
    const [squareSize, setSquareSize] = useState(0)
    const [arrayOfSquares, setArrayOfSquares] = useState([])
    const [special, setSpecial] = useState('')
    const [numberOfSquares, setNumberOfSquares] = useState(0)

    useEffect(() => {
        let special = Math.ceil(Math.random() * 4)
        // special is 2
        // special number between 1 -> squareSize*squareSize
        setGameOn(true)
        setSquareSize(2)
        setArrayOfSquares([1, 2, 3, 4])
        setSpecial(special)
        setNumberOfSquares(4)
    }, [])


    const handleClick = (event) => {
        event.preventDefault()
        let value = parseInt(event.target.value)
        if (value === special) {

            // setGameOn(true)
            let newSquareSize = squareSize + 1
            setSquareSize(newSquareSize)

            let NewNumberOfSquares = newSquareSize ** 2
            setNumberOfSquares(NewNumberOfSquares)
            console.log(NewNumberOfSquares)

            let newArrayOfSquares = []

            for (let i = 1; i <= NewNumberOfSquares; i++) {
                newArrayOfSquares.push(i)
            }
            setArrayOfSquares(newArrayOfSquares)

            let newSpecial = Math.ceil(Math.random() * numberOfSquares)
            setSpecial(newSpecial)

        }
        else if (value !== special) {
            console.log(value, special)
            console.log(typeof value, typeof special)
            setGameOn(false)
        }
    }

    return (
        <div>
            {
                gameOn === true &&
                <p>GAME ON</p>
            }
            {
                gameOn === true ?
                    arrayOfSquares.map((square) => {
                        return (
                            <form onSubmit={handleClick}>
                                <button disabled={gameOn === false} value={square} onClick={event => handleClick(event)}>{square === special ? 'Right' : 'Wrong'}</button>
                            </form>
                        )
                    })
                    :
                    <p>GAME OVER</p>
            }
        </div>
    )
}

export default Game