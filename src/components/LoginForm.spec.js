import { shallowMount } from "@vue/test-utils";
import LoginForm from "./LoginForm";

describe("LoginForm.vue", () => {
  // test("컴포넌트가 마운팅되면 username이 존재하고 초기값으로 설정되어 있어야 한다", () => {
  //   const wrapper = shallowMount(LoginForm);
  //   expect(wrapper.vm.username).toBe("");
  // });
  test("ID가 이메일 형식이 아니면 경고 메시지가 출력된다", () => {
    const wrapper = shallowMount(LoginForm, {
      data() {
        return {
          username: "test",
        };
      },
    });
    // const idInput = wrapper.find("#username");
    // console.log("인풋 박스의 값", idInput.element.value);
    // console.log(wrapper.vm.isUsernameValid);
    const warningText = wrapper.find(".warning");
    console.log(warningText.html());
    expect(warningText.exists()).toBeTruthy();
  });

  test("ID와 PW가 입력되지 않으면 로그인 버튼이 비활성화 된다", () => {});
});
