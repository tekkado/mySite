import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { describe, expect, it, vi } from "vitest";
import { CONTACT_FORM } from "../config";
import Contact from "./Contact";

function renderForm() {
  const user = userEvent.setup();
  const view = render(<Contact id="contact" title="Contact" />);
  const fill = async () => {
    await user.type(screen.getByLabelText("Name"), "Ada");
    await user.type(screen.getByLabelText("Email"), "ada@example.com");
    await user.type(screen.getByLabelText("Message"), "Hello!");
  };
  const submit = () => user.click(screen.getByRole("button", { name: /send message/i }));
  return { ...view, user, fill, submit };
}

describe("Contact form", () => {
  it("posts the form to the endpoint and confirms success", async () => {
    const fetchMock = vi.spyOn(globalThis, "fetch").mockResolvedValue(new Response("{}", { status: 200 }));
    const { fill, submit } = renderForm();
    await fill();
    await submit();

    expect(fetchMock).toHaveBeenCalledOnce();
    const [url, init] = fetchMock.mock.calls[0];
    expect(url).toBe(CONTACT_FORM.endpoint);
    expect((init?.body as FormData).get("email")).toBe("ada@example.com");
    expect(await screen.findByText(/thanks/i)).toBeInTheDocument();
  });

  it("shows an error when the request fails", async () => {
    vi.spyOn(globalThis, "fetch").mockResolvedValue(new Response("", { status: 500 }));
    const { fill, submit } = renderForm();
    await fill();
    await submit();
    expect(await screen.findByText(/something went wrong/i)).toBeInTheDocument();
  });

  it("silently drops submissions that fill the honeypot", async () => {
    const fetchMock = vi.spyOn(globalThis, "fetch");
    const { container, fill, submit } = renderForm();
    await fill();
    const honeypot = container.querySelector<HTMLInputElement>(`input[name="${CONTACT_FORM.honeypotField}"]`)!;
    honeypot.value = "spam";
    await submit();

    expect(fetchMock).not.toHaveBeenCalled();
    expect(await screen.findByText(/thanks/i)).toBeInTheDocument();
  });
});
