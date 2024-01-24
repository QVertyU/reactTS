import {test, describe, expect, afterEach, jest} from "@jest/globals";
import {create} from "react-test-renderer";
import {Loader} from "./index.ts";

describe('Loader', () => {
    afterEach(() => {
        jest.clearAllMocks();
    });

    test('Render correctly without fill', () => {
        const tree =
            create(
                <Loader />
            )
            .toJSON();
        expect(tree).toMatchSnapshot();
    })

    test('Render correctly with fill', () => {
        const tree =
            create (
                <Loader fill={'red'}/>
            )
            .toJSON();
        expect(tree).toMatchSnapshot();
    })
})