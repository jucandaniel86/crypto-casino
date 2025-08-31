<script setup lang="ts">
const displayGame = ref<boolean>(false)
</script>
<template>
  <div class="gameplay-wrapper">
    <div class="gameplay-content">
      <div class="gameplay-overlay">
        <div class="game-wrapper" :class="{ 'game-blur': !displayGame }">
          <iframe
            class="game-iframe"
            src="https://launcher-eu1.fh8labs.com/games/encrypted/launcher?payload=QTEyOEdDTQ.UFS_CMZfosypj2FPtwIGLhreOjO28eEvA28bjzhqU8cNUkDPdr36PHVOOSc.6Vs8npj0XxX8xdrY.mCNMjqXbcXyWw4hEJrd4x0E3I2ax7N21oOb8Ft_uSGRpfpDR8BCdDEcaTDpcibxq0irNG9ogeNgJnyoC8yuvZfXlgwXx0k2_IoheclAHB4blvbTW6svf0iyqKUVxrlKattfuegRqXvGzpGVIBVsRSgJ8U1BKs5oIhKSzAPhXIKR7UTRCt4UyzFhaCe-NdBajSMBJI5GmLHPJQ8ATOvOA7EbWd5COlthrpGSy5kpt7zWCdJ4aDxXcswjmTxB4g8aP5CA5Xf-JAqeNWuHWqvrRn-95PJQRdw0oYHwLjxU41aw_r3KAB5BMfA73YMQjQJ8nAv2YFgwaFjgzaYQWQ3_UVnqL1azxnEfJJTndPlIVMhajkWGcBEUCLzMAg0zStTBuf3X1ojhk6v8WIneQnRobQO1PRuPO43ZdVd11EmGrKBcY8hEA-LA1KjzPM5aB7k-qWfWv723PJBixk_onkBVzpJkWa1cbg2olAdP2rlNRVFvMO2I3PqlaEbnJfg.qbq-U_hnET2NWJn-mu4ioQ&amp;"
            allow="fullscreen"
          />
        </div>
        <div class="gameplay-currencymessage" v-if="!displayGame">
          <p>The in-game balance will be displayed in EUR.</p>
          <p>
            <v-checkbox label="Don't show this again" hide-details />
          </p>
          <p class="w-100 text-center">
            <v-btn color="purple" class="w-100" max-width="200" @click.prevent="displayGame = true"
              >Play</v-btn
            >
          </p>
        </div>
      </div>
    </div>
  </div>
</template>
