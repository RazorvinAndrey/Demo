import React from "react";
import {create} from "react-test-renderer";
import ProfileStatus from "./ProfileStatus";

describe("ProfileStatus component", () => {
    test("Status from props should be in the state", () => {
        const component = create(<ProfileStatus status="SUBSCRIBE TO BASIC"/>);
        const instance = component.getInstance();
        expect(instance.state.status).toBe("SUBSCRIBE TO BASIC");
    });

    test("after creation span should be displayed", () => {
        const component = create(<ProfileStatus status="SUBSCRIBE TO BASIC"/>);
        const instance = component.root;
        let span = instance.findByType('span')
        expect(span).not.toBeNull();
    });

    test("after no creation input should be displayed", () => {
        const component = create(<ProfileStatus status="SUBSCRIBE TO BASIC"/>);
        const instance = component.root;
        expect(() => {
            let input = instance.findByType('input')
        }).toThrow();
    });

    test("input should be displayed in editMode", () => {
        const component = create(<ProfileStatus status="SUBSCRIBE TO BASIC"/>);
        const instance = component.root;
        let span = instance.findByType('span');
        span.props.onDoubleClick();
        let input = instance.findByType('input');
        expect(input.props.value).toBe("SUBSCRIBE TO BASIC");
    });

    test("callback to update status", () => {
        const mockCallback = jest.fn()
        const component = create(<ProfileStatus status="SUBSCRIBE TO BASIC" updateStatus={mockCallback}/>);
        const instance = component.getInstance();
        instance.deActivateEditMode();
        expect(mockCallback.mock.calls.length).toBe(1);
    });
});