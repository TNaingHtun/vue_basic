<template>
  <div>
    <p>
      <a class="btn btn-primary" data-bs-toggle="modal" :data-bs-target="'#exampleModal'+ names[index]">{{ names[index] }}</a>
    </p>
    <div
      class="modal fade"
      :id="'exampleModal'+names[index]"
      tabindex="-1"
      aria-labelledby="exampleModalLabel"
      aria-hidden="true"
    >
      <div class="modal-dialog">
        <p>{{ names[index] }}</p>
      </div>
    </div>
  </div>
</template>

<script src="../services/components/content.js">
</script>
