import {memo} from 'react'

const Inputs = () => {
    console.log('hello i am Inputs components');
  return (
    <>
        <div>
            <label>name : </label>
            <input
                name="name"
                type="text"
                placeholder="Jane Doe"
                required
            />
        </div>
        <div>
            <label>email : </label>
            <input
                name="email"
                type="email"
                placeholder="jane.doe@example.com"
                required
            />
        </div>
        <div>
            <label>address : </label>
            <input
                name="address"
                label="Address"
                type="text"
                placeholder="address"
                required
            />
        </div>
        <div>
            <label>city : </label>
            <input
                name="city"
                label="City"
                type="text"
                placeholder="city"
                required
            />
        </div>
        <div>
            <label>state : </label>
            <input
                name="state"
                label="State"
                type="text"
                placeholder="State"
                required
            />
        </div>
        <div>
            <label>ZIP : </label>
            <input
                name="zip"
                label="ZIP"
                type="text"
                placeholder="ZIP"
                required
            />
        </div>
    </>
  )
}

export default memo(Inputs)