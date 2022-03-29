<template>
  <v-app>
    <v-card>
      <v-form
        ref="form"
        v-model="valid"
        lazy-validation
      >
        <v-text-field v-model="firstname" :rules="nameRules" label="First Name" name="firstname" required>
        </v-text-field>

        <v-text-field v-model="lastname" :rules="nameRules" label="Last Name" required>
        </v-text-field>

        <v-text-field v-model="email" :rules="emailRules" label="Email" required>
        </v-text-field>

        <v-text-field v-model="password" type="password" :rules="passwordRules"
         label="Password" required></v-text-field>

        <v-text-field v-model="vpassword" type="password" :rules="passwordRules"
         label="Password vérif" required></v-text-field>

        <v-alert type="error" v-if="pswdError">
          Erreur vérification de mot de passe
        </v-alert>

        <v-card-actions class="justify-center">
            <v-btn
              :disabled="!valid"
              color="success"
              class="mr-4"
              @click="validate"
            >
              Valider
            </v-btn>

            <v-btn
              color="error"
              class="mr-4"
              @click="reset"
            >
              Reset
            </v-btn>
        </v-card-actions>

      </v-form>
    </v-card>
  </v-app>
</template>

<script>
  import axios from "axios";

  export default {

    data: () => ({
      valid: true,
      pswdError: false,
      firstname: '',
      lastname: '',
      nameRules: [
        v => !!v || 'Champ requis',
        v => (v && v.length <= 10) || 'Name must be less than 10 characters',
      ],
      email: '',
      emailRules: [
        v => !!v || 'E-mail requis',
        v => /^(([^<>()[\]\\.,;:\s@']+(\.[^<>()\\[\]\\.,;:\s@']+)*)|('.+'))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(v) || 'E-mail doit être valide',
      ],
      password: '',
      passwordRules: [
          v => !!v || 'Mot de passe requis',
          v => /(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{6,}/.test(v) || 'Le mot de passe doit contenir une lettre minuscule, un chiffre, un caractère spécial et une lettre majuscule',
      ],
      vpassword: '',
    }),

    methods: {
      validate () {
        let isFormValid = this.$refs.form.validate()

        if (!(this.password === this.vpassword)){
          this.pswdError = true
        }

        if (isFormValid && this.password===this.vpassword){
          this.pswdError = false
          let data = {
            "firstname": this.firstname,
            "lastname": this.lastname,
            "email": this.email,
            "password": this.password,
          }
          axios.post('http://localhost:8000/index.php/user/post', data)
          .then(response => console.log(response));
        }
      },
      reset () {
        this.$refs.form.reset()
      },
    },
  }
</script>