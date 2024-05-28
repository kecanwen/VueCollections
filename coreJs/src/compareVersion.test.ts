import { compareVersion } from './index.ts'
describe('compareVersion', () => {
  
  it('should compare', () => {
    expect(compareVersion('1.0.0', '1.0.0')).toBe(0)
    expect(compareVersion('1.0.0', '1.0.1')).toBe(-1)
    expect(compareVersion('1.0.1', '1.0.0')).toBe(1)
    expect(compareVersion('1.0.0', '1.1.0')).toBe(-1)
    expect(compareVersion('1.1.0', '1.0.0')).toBe(1)
    expect(compareVersion('1.0.0', '2.0.0')).toBe(-1)
    expect(compareVersion('2.0.0', '1.0.0')).toBe(1)
    expect(compareVersion('1.0.0', '1.0.1')).toBe(-1)
    expect(compareVersion('1.0.1', '1.0.0')).toBe(1)
    expect(compareVersion('1.0.1', '1.0.0')).toBe(1)
    expect(compareVersion('1.1', '1.1.0')).toBe(0)
  })
})