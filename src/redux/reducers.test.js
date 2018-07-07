import {reducers} from "./reducers.js";
import {text} from "../markupKey";

it('Checks reducer default', () => {
expect( reducers({}, {type:'SHOWKEY'} ).toMatchObject({ showKey: true })

});
