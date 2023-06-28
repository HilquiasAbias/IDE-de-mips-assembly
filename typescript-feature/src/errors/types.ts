type ErrorInput = {
  module: string
  error: string
}

type MountError = {
  module: 'mount'
  error: 'mount_without_instructions' | 'error2' | 'error3'
  msg?: 'Tentou montar código vazio'
}

type UnmountError = {
  module: 'unmount'
  error: 'unmount_without_instructions' | 'error2' | 'error3'
}

type StepError = {
  module: 'step'
  error: 'step_without_instructions' | 'error2' | 'error3'
}

type BackError = {
  module: 'back'
  error: 'back_without_instructions' | 'error2' | 'error3'
}

type RunError = {
  module: 'run'
  error: 'run_without_instructions' | 'error2' | 'error3'
}

type SysError = {
  module: 'sys'
  error: 'incorrect_integer_value_input' | 'error2' | 'error3'
}

export type ErrorType = MountError | UnmountError | StepError | BackError | RunError | SysError
