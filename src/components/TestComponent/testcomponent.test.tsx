import {afterEach, test, jest, describe, expect} from "@jest/globals";
import {TestComponent} from "./index.ts";
import {create} from "react-test-renderer";

describe("TestComponent", () => {
    afterEach(() => {
        jest.clearAllMocks();
    });

    test('Render correctly', () => {
        const tree =
            create(
                <TestComponent>
                    test
                </TestComponent>
            )
            .toJSON();
        expect(tree).toMatchSnapshot();
    })
})