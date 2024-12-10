import Image from "next/image";
import { staffAvatar } from "@/assets/images";
import { EllipsisHorizontalIcon } from "@heroicons/react/24/solid";

export function AdminTable() {
  return (
    <div className="mt-6 flow-root">
      <div className="inline-block min-w-full align-middle">
        <div className="rounded-lg bg-gray-50 p-2 md:pt-0">
          <table className=" min-w-full text-gray-900 table">
            <thead className="rounded-lg text-left text-sm font-normal">
              <tr className=" [&:first-child>td:first-child]:rounded-tl-lg [&:first-child>td:last-child]:rounded-tr-lg [&:last-child>td:first-child]:rounded-bl-lg [&:last-child>td:last-child]:rounded-br-lg">
                <th scope="col" className="px-4 py-5 font-medium sm:pl-6">
                  Staff
                </th>
                <th scope="col" className="px-3 py-5 font-medium">
                  Position
                </th>
                <th scope="col" className="px-3 py-5 font-medium">
                  Date Employed
                </th>
                <th scope="col" className="px-3 py-5 font-medium">
                  Staff ID
                </th>
                <th scope="col" className="px-3 py-5 font-medium">
                  Action
                </th>
              </tr>
            </thead>
            <tbody className="bg-white-50">
              <tr className="w-full border-b py-3 text-sm last-of-type:border-none [&:first-child>td:first-child]:rounded-tl-lg [&:first-child>td:last-child]:rounded-tr-lg [&:last-child>td:first-child]:rounded-bl-lg [&:last-child>td:last-child]:rounded-br-lg">
                <td className="whitespace-nowrap py-3 pl-6 pr-3">
                  <div className="flex items-center gap-3">
                    <Image
                      src={staffAvatar}
                      className="rounded-full"
                      width={28}
                      height={28}
                      alt="profile picture"
                    />
                    <p>Stephen Mark</p>
                  </div>
                </td>
                <td className="whitespace-nowrap px-6 sm:px-3 py-3">
                  Principal
                </td>
                <td className="whitespace-nowrap px-3 py-3">08/02/2024</td>
                <td className="whitespace-nowrap px-3 py-3">1683AD</td>
                <td className="whitespace-nowrap px-3 py-3 text-center">
                  <EllipsisHorizontalIcon className="h-5 w-5 text-center" />
                </td>
              </tr>
              <tr className="w-full border-b py-3 text-sm last-of-type:border-none [&:first-child>td:first-child]:rounded-tl-lg [&:first-child>td:last-child]:rounded-tr-lg [&:last-child>td:first-child]:rounded-bl-lg [&:last-child>td:last-child]:rounded-br-lg">
                <td className="whitespace-nowrap py-3 pl-6 pr-3">
                  <div className="flex items-center gap-3">
                    <Image
                      src={staffAvatar}
                      className="rounded-full"
                      width={28}
                      height={28}
                      alt="profile picture"
                    />
                    <p>Stephen Mark</p>
                  </div>
                </td>
                <td className="whitespace-nowrap px-6 sm:px-3 py-3">
                  Principal
                </td>
                <td className="whitespace-nowrap px-3 py-3">08/02/2024</td>
                <td className="whitespace-nowrap px-3 py-3">1683AD</td>
                <td className="whitespace-nowrap px-3 py-3">
                  <EllipsisHorizontalIcon className="h-5 w-5" />
                </td>
              </tr>
              <tr className="w-full border-b py-3 text-sm last-of-type:border-none [&:first-child>td:first-child]:rounded-tl-lg [&:first-child>td:last-child]:rounded-tr-lg [&:last-child>td:first-child]:rounded-bl-lg [&:last-child>td:last-child]:rounded-br-lg">
                <td className="whitespace-nowrap py-3 pl-6 pr-3">
                  <div className="flex items-center gap-3">
                    <Image
                      src={staffAvatar}
                      className="rounded-full"
                      width={28}
                      height={28}
                      alt="profile picture"
                    />
                    <p>Stephen Mark</p>
                  </div>
                </td>
                <td className="whitespace-nowrap px-6 sm:px-3 py-3">
                  Principal
                </td>
                <td className="whitespace-nowrap px-3 py-3">08/02/2024</td>
                <td className="whitespace-nowrap px-3 py-3">1683AD</td>
                <td className="whitespace-nowrap px-3 py-3">
                  <EllipsisHorizontalIcon className="h-5 w-5" />
                </td>
              </tr>
              <tr className="w-full border-b py-3 text-sm last-of-type:border-none [&:first-child>td:first-child]:rounded-tl-lg [&:first-child>td:last-child]:rounded-tr-lg [&:last-child>td:first-child]:rounded-bl-lg [&:last-child>td:last-child]:rounded-br-lg">
                <td className="whitespace-nowrap py-3 pl-6 pr-3">
                  <div className="flex items-center gap-3">
                    <Image
                      src={staffAvatar}
                      className="rounded-full"
                      width={28}
                      height={28}
                      alt="profile picture"
                    />
                    <p>Stephen Mark</p>
                  </div>
                </td>
                <td className="whitespace-nowrap px-6 sm:px-3 py-3">
                  Principal
                </td>
                <td className="whitespace-nowrap px-3 py-3">08/02/2024</td>
                <td className="whitespace-nowrap px-3 py-3">1683AD</td>
                <td className="whitespace-nowrap px-3 py-3">
                  <EllipsisHorizontalIcon className="h-5 w-5" />
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}
export function AcademicTable() {
  return (
    <div className="mt-6 flow-root">
      <div className="inline-block min-w-full align-middle">
        <div className="rounded-lg bg-gray-50 p-2 md:pt-0">
          <table className="min-w-full text-gray-900 table">
            <thead className="rounded-lg text-left text-sm font-normal">
              <tr className=" [&:first-child>td:first-child]:rounded-tl-lg [&:first-child>td:last-child]:rounded-tr-lg [&:last-child>td:first-child]:rounded-bl-lg [&:last-child>td:last-child]:rounded-br-lg">
                <th scope="col" className="px-4 py-5 font-medium sm:pl-6">
                  Name
                </th>
                <th scope="col" className="px-3 py-5 font-medium">
                  Subject
                </th>
                <th scope="col" className="px-3 py-5 font-medium">
                  Form
                </th>
                <th scope="col" className="px-3 py-5 font-medium">
                  Date Employed
                </th>
                <th scope="col" className="px-3 py-5 font-medium">
                  Staff ID
                </th>
                <th scope="col" className="px-3 py-5 font-medium">
                  Action
                </th>
              </tr>
            </thead>
            <tbody className="bg-white-50">
              <tr className="w-full border-b py-3 text-sm last-of-type:border-none [&:first-child>td:first-child]:rounded-tl-lg [&:first-child>td:last-child]:rounded-tr-lg [&:last-child>td:first-child]:rounded-bl-lg [&:last-child>td:last-child]:rounded-br-lg">
                <td className="whitespace-nowrap py-3 pl-6 pr-3">
                  <div className="flex items-center gap-3">
                    <Image
                      src={staffAvatar}
                      className="rounded-full"
                      width={28}
                      height={28}
                      alt="profile picture"
                    />
                    <p>Stephen Mark</p>
                  </div>
                </td>
                <td className="whitespace-nowrap px-6 sm:px-3 py-3">Maths</td>
                <td className="whitespace-nowrap px-3 py-3">JSS 1</td>
                <td className="whitespace-nowrap px-3 py-3">08/02/2024</td>
                <td className="whitespace-nowrap px-3 py-3">1683AD</td>
                <td className="whitespace-nowrap px-3 py-3 text-center">
                  <EllipsisHorizontalIcon className="h-5 w-5 text-center" />
                </td>
              </tr>
              <tr className="w-full border-b py-3 text-sm last-of-type:border-none [&:first-child>td:first-child]:rounded-tl-lg [&:first-child>td:last-child]:rounded-tr-lg [&:last-child>td:first-child]:rounded-bl-lg [&:last-child>td:last-child]:rounded-br-lg">
                <td className="whitespace-nowrap py-3 pl-6 pr-3">
                  <div className="flex items-center gap-3">
                    <Image
                      src={staffAvatar}
                      className="rounded-full"
                      width={28}
                      height={28}
                      alt="profile picture"
                    />
                    <p>Stephen Mark</p>
                  </div>
                </td>
                <td className="whitespace-nowrap px-6 sm:px-3 py-3">Maths</td>
                <td className="whitespace-nowrap px-3 py-3">JSS 1</td>
                <td className="whitespace-nowrap px-3 py-3">08/02/2024</td>
                <td className="whitespace-nowrap px-3 py-3">1683AD</td>
                <td className="whitespace-nowrap px-3 py-3 text-center">
                  <EllipsisHorizontalIcon className="h-5 w-5 text-center" />
                </td>
              </tr>
              <tr className="w-full border-b py-3 text-sm last-of-type:border-none [&:first-child>td:first-child]:rounded-tl-lg [&:first-child>td:last-child]:rounded-tr-lg [&:last-child>td:first-child]:rounded-bl-lg [&:last-child>td:last-child]:rounded-br-lg">
                <td className="whitespace-nowrap py-3 pl-6 pr-3">
                  <div className="flex items-center gap-3">
                    <Image
                      src={staffAvatar}
                      className="rounded-full"
                      width={28}
                      height={28}
                      alt="profile picture"
                    />
                    <p>Stephen Mark</p>
                  </div>
                </td>
                <td className="whitespace-nowrap px-6 sm:px-3 py-3">Maths</td>
                <td className="whitespace-nowrap px-3 py-3">JSS 1</td>
                <td className="whitespace-nowrap px-3 py-3">08/02/2024</td>
                <td className="whitespace-nowrap px-3 py-3">1683AD</td>
                <td className="whitespace-nowrap px-3 py-3 text-center">
                  <EllipsisHorizontalIcon className="h-5 w-5 text-center" />
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}
export function ClassTable() {
  return (
    <div className="mt-6 flow-root">
      <div className="inline-block min-w-full align-middle">
        <div className="rounded-lg bg-gray-50 p-2 md:pt-0">
          <table className="min-w-full text-gray-900 table">
            <thead className="rounded-lg text-left text-sm font-normal">
              <tr className=" [&:first-child>td:first-child]:rounded-tl-lg [&:first-child>td:last-child]:rounded-tr-lg [&:last-child>td:first-child]:rounded-bl-lg [&:last-child>td:last-child]:rounded-br-lg">
                <th scope="col" className="px-4 py-5 font-medium sm:pl-6">
                  Name
                </th>
                <th scope="col" className="px-3 py-5 font-medium">
                  Sex
                </th>

                <th scope="col" className="px-3 py-5 font-medium">
                  Student ID
                </th>
                <th scope="col" className="px-3 py-5 font-medium">
                  Action
                </th>
              </tr>
            </thead>
            <tbody className="bg-white-50">
              <tr className="w-full border-b py-3 text-sm last-of-type:border-none [&:first-child>td:first-child]:rounded-tl-lg [&:first-child>td:last-child]:rounded-tr-lg [&:last-child>td:first-child]:rounded-bl-lg [&:last-child>td:last-child]:rounded-br-lg">
                <td className="whitespace-nowrap py-3 pl-6 pr-3">
                  <div className="flex items-center gap-3">
                    <Image
                      src={staffAvatar}
                      className="rounded-full"
                      width={28}
                      height={28}
                      alt="profile picture"
                    />
                    <p>Stephen Mark</p>
                  </div>
                </td>
                <td className="whitespace-nowrap px-6 sm:px-3 py-3">Male</td>
                <td className="whitespace-nowrap px-3 py-3">26457DF</td>

                <td className="whitespace-nowrap px-3 py-3 text-center">
                  <EllipsisHorizontalIcon className="h-5 w-5 text-center" />
                </td>
              </tr>
              <tr className="w-full border-b py-3 text-sm last-of-type:border-none [&:first-child>td:first-child]:rounded-tl-lg [&:first-child>td:last-child]:rounded-tr-lg [&:last-child>td:first-child]:rounded-bl-lg [&:last-child>td:last-child]:rounded-br-lg">
                <td className="whitespace-nowrap py-3 pl-6 pr-3">
                  <div className="flex items-center gap-3">
                    <Image
                      src={staffAvatar}
                      className="rounded-full"
                      width={28}
                      height={28}
                      alt="profile picture"
                    />
                    <p>Stephen Mark</p>
                  </div>
                </td>
                <td className="whitespace-nowrap px-6 sm:px-3 py-3">Male</td>
                <td className="whitespace-nowrap px-3 py-3">26457DF</td>

                <td className="whitespace-nowrap px-3 py-3 text-center">
                  <EllipsisHorizontalIcon className="h-5 w-5 text-center" />
                </td>
              </tr>
              <tr className="w-full border-b py-3 text-sm last-of-type:border-none [&:first-child>td:first-child]:rounded-tl-lg [&:first-child>td:last-child]:rounded-tr-lg [&:last-child>td:first-child]:rounded-bl-lg [&:last-child>td:last-child]:rounded-br-lg">
                <td className="whitespace-nowrap py-3 pl-6 pr-3">
                  <div className="flex items-center gap-3">
                    <Image
                      src={staffAvatar}
                      className="rounded-full"
                      width={28}
                      height={28}
                      alt="profile picture"
                    />
                    <p>Stephen Mark</p>
                  </div>
                </td>
                <td className="whitespace-nowrap px-6 sm:px-3 py-3">Male</td>
                <td className="whitespace-nowrap px-3 py-3">26457DF</td>

                <td className="whitespace-nowrap px-3 py-3 text-center">
                  <EllipsisHorizontalIcon className="h-5 w-5 text-center" />
                </td>
              </tr>
              <tr className="w-full border-b py-3 text-sm last-of-type:border-none [&:first-child>td:first-child]:rounded-tl-lg [&:first-child>td:last-child]:rounded-tr-lg [&:last-child>td:first-child]:rounded-bl-lg [&:last-child>td:last-child]:rounded-br-lg">
                <td className="whitespace-nowrap py-3 pl-6 pr-3">
                  <div className="flex items-center gap-3">
                    <Image
                      src={staffAvatar}
                      className="rounded-full"
                      width={28}
                      height={28}
                      alt="profile picture"
                    />
                    <p>Stephen Mark</p>
                  </div>
                </td>
                <td className="whitespace-nowrap px-3 py-3">Male</td>
                <td className="whitespace-nowrap px-3 py-3">26457DF</td>

                <td className="whitespace-nowrap px-3 py-3 text-center">
                  <EllipsisHorizontalIcon className="h-5 w-5 text-center" />
                </td>
              </tr>
              <tr className="w-full border-b py-3 text-sm last-of-type:border-none [&:first-child>td:first-child]:rounded-tl-lg [&:first-child>td:last-child]:rounded-tr-lg [&:last-child>td:first-child]:rounded-bl-lg [&:last-child>td:last-child]:rounded-br-lg">
                <td className="whitespace-nowrap py-3 pl-6 pr-3">
                  <div className="flex items-center gap-3">
                    <Image
                      src={staffAvatar}
                      className="rounded-full"
                      width={28}
                      height={28}
                      alt="profile picture"
                    />
                    <p>Stephen Mark</p>
                  </div>
                </td>
                <td className="whitespace-nowrap px-6 sm:px-3 py-3">Male</td>
                <td className="whitespace-nowrap px-3 py-3">26457DF</td>

                <td className="whitespace-nowrap px-3 py-3 text-center">
                  <EllipsisHorizontalIcon className="h-5 w-5 text-center" />
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}

export function InvoiceTable() {
  return (
    <div className="mt-6 flow-root">
      <div className="inline-block min-w-full align-middle">
        <div className="rounded-lg bg-gray-50 p-2 md:pt-0">
          <table className="min-w-full text-gray-900 table">
            <thead className="rounded-lg text-left text-sm font-normal">
              <tr className=" [&:first-child>td:first-child]:rounded-tl-lg [&:first-child>td:last-child]:rounded-tr-lg [&:last-child>td:first-child]:rounded-bl-lg [&:last-child>td:last-child]:rounded-br-lg">
                <th scope="col" className="whitespace-nowrap px-3 py-3">
                  <input type="checkbox" name="" id="" />
                </th>
                <th scope="col" className="px-4 py-5 font-medium sm:pl-6">
                  Name
                </th>
                <th scope="col" className="px-3 py-5 font-medium">
                  Invoice Number
                </th>

                <th scope="col" className="px-3 py-5 font-medium">
                  Date
                </th>
                <th scope="col" className="px-3 py-5 font-medium">
                  Status
                </th>
                <th scope="col" className="px-3 py-5 font-medium">
                  Amount
                </th>
                <th scope="col" className="px-3 py-5 font-medium">
                  Action
                </th>
              </tr>
            </thead>
            <tbody className="bg-white-50">
              <tr className="w-full border-b py-3 text-sm last-of-type:border-none [&:first-child>td:first-child]:rounded-tl-lg [&:first-child>td:last-child]:rounded-tr-lg [&:last-child>td:first-child]:rounded-bl-lg [&:last-child>td:last-child]:rounded-br-lg">
                <td className="whitespace-nowrap px-3 py-3">
                  <input type="checkbox" name="" id="" />
                </td>
                <td className="whitespace-nowrap py-3 pl-6 pr-3">
                  <div className="flex items-center gap-3">
                    <Image
                      src={staffAvatar}
                      className="rounded-full"
                      width={28}
                      height={28}
                      alt="profile picture"
                    />
                    <p>Stephen Mark</p>
                  </div>
                </td>
                <td className="whitespace-nowrap px-6 sm:px-3 py-3">1634AD</td>
                <td className="whitespace-nowrap px-3 py-3">08/02/2024</td>
                <td className="whitespace-nowrap px-3 py-3">08/02/2024</td>
                <td className="whitespace-nowrap px-3 py-3">#50,690.00</td>
                <td className="whitespace-nowrap px-3 py-3 text-center">
                  <EllipsisHorizontalIcon className="h-5 w-5 text-center" />
                </td>
              </tr>
              <tr className="w-full border-b py-3 text-sm last-of-type:border-none [&:first-child>td:first-child]:rounded-tl-lg [&:first-child>td:last-child]:rounded-tr-lg [&:last-child>td:first-child]:rounded-bl-lg [&:last-child>td:last-child]:rounded-br-lg">
                <td className="whitespace-nowrap px-3 py-3">
                  <input type="checkbox" name="" id="" />
                </td>
                <td className="whitespace-nowrap py-3 pl-6 pr-3">
                  <div className="flex items-center gap-3">
                    <Image
                      src={staffAvatar}
                      className="rounded-full"
                      width={28}
                      height={28}
                      alt="profile picture"
                    />
                    <p>Stephen Mark</p>
                  </div>
                </td>
                <td className="whitespace-nowrap px-6 sm:px-3 py-3">1634AD</td>
                <td className="whitespace-nowrap px-3 py-3">08/02/2024</td>
                <td className="whitespace-nowrap px-3 py-3">08/02/2024</td>
                <td className="whitespace-nowrap px-3 py-3">#50,690.00</td>
                <td className="whitespace-nowrap px-3 py-3 text-center">
                  <EllipsisHorizontalIcon className="h-5 w-5 text-center" />
                </td>
              </tr>
              <tr className="w-full border-b py-3 text-sm last-of-type:border-none [&:first-child>td:first-child]:rounded-tl-lg [&:first-child>td:last-child]:rounded-tr-lg [&:last-child>td:first-child]:rounded-bl-lg [&:last-child>td:last-child]:rounded-br-lg">
                <td className="whitespace-nowrap px-3 py-3">
                  <input type="checkbox" name="" id="" />
                </td>
                <td className="whitespace-nowrap py-3 pl-6 pr-3">
                  <div className="flex items-center gap-3">
                    <Image
                      src={staffAvatar}
                      className="rounded-full"
                      width={28}
                      height={28}
                      alt="profile picture"
                    />
                    <p>Stephen Mark</p>
                  </div>
                </td>
                <td className="whitespace-nowrap px-6 sm:px-3 py-3">1634AD</td>
                <td className="whitespace-nowrap px-3 py-3">08/02/2024</td>
                <td className="whitespace-nowrap px-3 py-3">08/02/2024</td>
                <td className="whitespace-nowrap px-3 py-3">#50,690.00</td>
                <td className="whitespace-nowrap px-3 py-3 text-center">
                  <EllipsisHorizontalIcon className="h-5 w-5 text-center" />
                </td>
              </tr>
              <tr className="w-full border-b py-3 text-sm last-of-type:border-none [&:first-child>td:first-child]:rounded-tl-lg [&:first-child>td:last-child]:rounded-tr-lg [&:last-child>td:first-child]:rounded-bl-lg [&:last-child>td:last-child]:rounded-br-lg">
                <td className="whitespace-nowrap px-3 py-3">
                  <input type="checkbox" name="" id="" />
                </td>
                <td className="whitespace-nowrap py-3 pl-6 pr-3">
                  <div className="flex items-center gap-3">
                    <Image
                      src={staffAvatar}
                      className="rounded-full"
                      width={28}
                      height={28}
                      alt="profile picture"
                    />
                    <p>Stephen Mark</p>
                  </div>
                </td>
                <td className="whitespace-nowrap px-6 sm:px-3 py-3">1634AD</td>
                <td className="whitespace-nowrap px-3 py-3">08/02/2024</td>
                <td className="whitespace-nowrap px-3 py-3">08/02/2024</td>
                <td className="whitespace-nowrap px-3 py-3">#50,690.00</td>
                <td className="whitespace-nowrap px-3 py-3 text-center">
                  <EllipsisHorizontalIcon className="h-5 w-5 text-center" />
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}
