import esprima from 'esprima'
import {StyledDiv} from './fixtures/basic-styles'

console.log(esprima)

const thingToParse = function () {
    return true
}

it('it works', () => {
    const tree = esprima.parseScript(StyledDiv) 
    console.log(tree)
})