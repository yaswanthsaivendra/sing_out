const chai = require('chai');
const { ethers } = require('hardhat');


describe("Sing", () => {
    let sing;

    beforeEach( async() => {
        [creator, tipper] = await ethers.getSigners()

        const Sing = await ethers.getContractFactory("Sing")
        sing = await Sing.deploy();

    })

    describe('testing', async () => {
        const name = await sing.name()

        it('sets the name', () => {
            expect(name).to.equal('sing');
        } )
    })
})