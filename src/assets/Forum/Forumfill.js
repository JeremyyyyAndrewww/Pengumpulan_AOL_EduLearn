export function myFunction(message, messages, setMessage) {
    const updatedMessages = [...messages, message];
    setMessage(updatedMessages);
}