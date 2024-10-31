
import si, { Systeminformation } from 'systeminformation';

interface ISystemInformation {
    cpu: si.Systeminformation.CpuData;
    system: si.Systeminformation.SystemData;
    mem: si.Systeminformation.MemData;
    os: si.Systeminformation.OsData;
    currentLoad: si.Systeminformation.CurrentLoadData;
    processes: si.Systeminformation.ProcessesData;
    diskLayout: si.Systeminformation.DiskLayoutData[];
    networkInterfaces: si.Systeminformation.NetworkInterfacesData[];
  }

export const getSystemInformation = async (): Promise<ISystemInformation> => {

    const cpu = await si.cpu();
    const system = await si.system();
    const mem = await si.mem();
    const os = await si.osInfo();
    const currentLoad = await si.currentLoad();
    const processes = await si.processes();
    const diskLayout = await si.diskLayout();
    const networkInterfaces = await si.networkInterfaces();

    const networkInterfacesArray = Array.isArray(networkInterfaces)
    ? networkInterfaces
    : [networkInterfaces];

return {
    cpu,
    system,
    mem,
    os,
    currentLoad,
    processes,
    diskLayout,
    networkInterfaces: networkInterfacesArray
  };
}
