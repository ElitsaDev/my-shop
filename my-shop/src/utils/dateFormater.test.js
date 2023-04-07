import { formatDate } from "./dateFormater";

it('check utils dateformatter',  () => {
    const date = 'April 7, 2023'
    expect(date).toBe(formatDate('2023-04-07T10:37:57.660Z'));
});