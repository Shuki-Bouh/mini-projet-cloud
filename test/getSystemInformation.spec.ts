import { getSystemInformation } from '../src/getSystemInformation';
import si, { Systeminformation } from 'systeminformation';

describe('getSystemInformation', () => {
  it('should return an object conforming to ISystemInformation interface', async () => {
    const sysInfo = await getSystemInformation();

    expect(sysInfo).toHaveProperty('cpu');
    expect(sysInfo).toHaveProperty('system');
    expect(sysInfo).toHaveProperty('mem');
    expect(sysInfo).toHaveProperty('os');
    expect(sysInfo).toHaveProperty('currentLoad');
    expect(sysInfo).toHaveProperty('processes');
    expect(sysInfo).toHaveProperty('diskLayout');
    expect(sysInfo).toHaveProperty('networkInterfaces');
    expect(sysInfo.cpu).toHaveProperty('manufacturer');
    expect(sysInfo.system).toHaveProperty('model');
    expect(sysInfo.mem).toHaveProperty('total');
    expect(sysInfo.os).toHaveProperty('platform');
  });
});
