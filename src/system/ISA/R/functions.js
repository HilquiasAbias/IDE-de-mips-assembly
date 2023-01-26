import { uInt } from '../../toolkit.js'

export const add = (rs, rt) => rs + rt // (rd, rs, rt) => rd = rs + rt ???

export const addu = (rs, rt) => uInt(rs + rt)

export const and = (rs, rt) => rs & rt 

export const Break = null

export const div = (rs, rt) => [ rs % rt, rs / rt ]

export const divu = (rs, rt) => [ uInt(rs % rt), uInt(rs / rt) ]

export const jalr = null

// export const jr = 

// export const mfhi = 

// export const mflo = 

// export const mthi = 

// export const mtlo = 

// export const mult = 

// export const multu = 

