<template>
  <div class="hello">
    <h3>{{ msg }}</h3>
    <p>this pad is under developing, and huge changes may happend each day.</p>
    <p>think for twice before you copy this project.</p>

    <div class="bottom">
      <a class="github-fork" href="https://github.com/Jonham/language-learning-pad/tree/gh-pages">
        <svg aria-hidden="true" class="octicon octicon-mark-github" height="32" version="1.1" viewBox="0 0 16 16" width="32"><path fill-rule="evenodd" d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27.68 0 1.36.09 2 .27 1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.013 8.013 0 0 0 16 8c0-4.42-3.58-8-8-8z"></path></svg>
        <span>Fork me on Github</span>
      </a>
    </div>
  </div>
</template>

<script>
export default {
  name: 'hello',
  data () {
    return {
      msg: 'Welcome to Language-Learning-Pad.'
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  h3 {
    font-weight: normal;
  }
  p {
    border-left: 4px solid gray;
    padding-left: 1em;
    text-align: left;
    font-size: 0.8em;
  }
  .bottom {
    margin-top: 2em;
  }
  .github-fork {
    text-decoration: none;
    display: inline-block;
  }
  .github-fork:hover {
    color: blue;
  }
  .github-fork svg {
    display: inline-block;
  }
  .github-fork span {
    display: block;
    font-size: 0.6em;
  }

</style>
