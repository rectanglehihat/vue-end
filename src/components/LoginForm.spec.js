import { shallowMount } from "@vue/test-utils";
import LoginForm from "./LoginForm";

describe("LoginForm.vue", () => {
  // test("컴포넌트가 마운팅되면 username이 존재하고 초기값으로 설정되어 있어야 한다", () => {
  //   const wrapper = shallowMount(LoginForm);
  //   expect(wrapper.vm.username).toBe("");
  // });
  test("ID는 이메일 형식이어야 한다", () => {
    const wrapper = shallowMount(LoginForm, {
      data() {
        return {
          username: "test@abc.com",
        };
      },
    });
    const idInput = wrapper.find("#username");
    console.log("인풋 박스의 값", idInput.element.value);
    console.log(wrapper.vm.isUsernameValid);
  });
});
