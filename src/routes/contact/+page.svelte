<script lang="ts">
  import Button from "@/components/ui/Button.svelte";
  import InputLabel from "@/components/ui/InputLabel.svelte";
  import TextareaLabel from "@/components/ui/TextareaLabel.svelte";

  export let form;
</script>

<form class="flex flex-col gap-4" method="POST">
  <InputLabel
    label="Your Name"
    type="text"
    name="name"
    placeholder="John Doe"
    required
  />
  <InputLabel
    label="Your email"
    type="email"
    name="email"
    placeholder="john.doe@example.com"
    required
  />
  <InputLabel
    label="Subject"
    type="text"
    name="subject"
    placeholder="Subject"
    required
  />
  <TextareaLabel
    class="md:min-w-2xl"
    label="Message"
    name="message"
    placeholder="Your message"
    required
  />
  <Button class="ml-auto" type="submit">Send Message</Button>
  {#if form?.success}
    <p class="ml-auto">{form.message}</p>
  {/if}
</form>
