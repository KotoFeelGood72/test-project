import { ref, computed } from 'vue'
import { useVuelidate } from '@vuelidate/core'
import { required, maxLength } from '@vuelidate/validators'
import { useUsersStore, useUsersStoreRefs } from '@/stores/useUsersStore'
import { useMessage } from 'naive-ui'
import type { UserInterface } from '@/types/UserInterface'

export function useUsersForm() {
  const { deleteUser, saveUser } = useUsersStore()
  const { users } = useUsersStoreRefs()
  const message = useMessage()

  const options = ref([
    { value: 'LDAP', label: 'LDAP' },
    { value: 'Локальная', label: 'Локальная' },
  ])

  const rules = computed(() =>
    users.value.map((user) => ({
      user_login: { required, maxLength: maxLength(100) },
      user_pass: user.post_type === 'Локальная' ? { required, maxLength: maxLength(100) } : {},
    })),
  )

  const v$ = useVuelidate(rules, users)

  function onTagInput(user: UserInterface, value: string) {
    user.raw_tags = value
    user.tags = value
      .split(';')
      .map((tag) => tag.trim())
      .filter(Boolean)
      .map((tag) => ({ text: tag }))
  }

  async function trySave(user: UserInterface, type: 'login' | 'pass' | 'raw_tags') {
    const idx = users.value.findIndex((u) => u.user_id === user.user_id)
    if (idx === -1) return

    if (type === 'login') v$.value[idx].user_login.$touch()
    if (type === 'pass') v$.value[idx].user_pass?.$touch()
    if (type === 'raw_tags') v$.value[idx].raw_tags?.$touch?.()

    const valid = await v$.value[idx].$validate()

    if (valid) {
      await saveUser(user)
      message.success('Пользователь сохранен')
    } else {
      message.error('Заполните обязательные поля')
    }
  }

  async function handleDeleteUser(id: number) {
    await deleteUser(id)
    message.success('Пользователь успешно удален')
  }

  return {
    users,
    options,
    v$,
    trySave,
    onTagInput,
    handleDeleteUser,
  }
}
